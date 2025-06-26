const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Types
export interface User {
  id: string;
  email: string;
  name?: string;
  role: 'STUDENT' | 'ADMIN';
  createdAt: string;
}

export interface Question {
  id: string;
  stem: string;
  choices: string[];
  answer: number;
  explanation: string;
  tags: string[];
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  createdAt: string;
}

export interface Exam {
  id: string;
  title: string;
  questions: Question[];
  createdAt: string;
}

export interface Attempt {
  id: string;
  userId: string;
  examId?: string;
  score?: number;
  answers: Record<string, number>;
  createdAt: string;
}

export interface AuthResponse {
  access_token: string;
  user: {
    sub: string;
    email: string;
    role: string;
  };
}

// API Client
class ApiClient {
  private baseURL: string;
  private token?: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  setToken(token: string) {
    this.token = token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Auth endpoints
  async register(email: string, password: string, name?: string): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async getMe(): Promise<User> {
    return this.request<User>('/user/me');
  }

  // Question endpoints
  async getQuestions(): Promise<Question[]> {
    return this.request<Question[]>('/questions');
  }

  async getQuestion(id: string): Promise<Question> {
    return this.request<Question>(`/questions/${id}`);
  }

  async getAdaptiveQuestions(params?: {
    topic?: string;
    difficulty?: string;
    limit?: number;
  }): Promise<Question[]> {
    const searchParams = new URLSearchParams();
    if (params?.topic) searchParams.append('topic', params.topic);
    if (params?.difficulty) searchParams.append('difficulty', params.difficulty);
    if (params?.limit) searchParams.append('limit', params.limit.toString());

    return this.request<Question[]>(`/questions/adaptive?${searchParams}`);
  }

  async createQuestion(data: Omit<Question, 'id' | 'createdAt'>): Promise<Question> {
    return this.request<Question>('/questions', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateQuestion(id: string, data: Partial<Question>): Promise<Question> {
    return this.request<Question>(`/questions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteQuestion(id: string): Promise<void> {
    return this.request<void>(`/questions/${id}`, {
      method: 'DELETE',
    });
  }

  // Exam endpoints
  async getExams(): Promise<Exam[]> {
    return this.request<Exam[]>('/exams');
  }

  async getExam(id: string): Promise<Exam> {
    return this.request<Exam>(`/exams/${id}`);
  }

  async simulateExam(id: string): Promise<Exam> {
    return this.request<Exam>(`/exams/${id}/simulate`);
  }

  async createExam(data: { title: string; questionIds: string[] }): Promise<Exam> {
    return this.request<Exam>('/exams', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateExam(id: string, data: { title?: string; questionIds?: string[] }): Promise<Exam> {
    return this.request<Exam>(`/exams/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteExam(id: string): Promise<void> {
    return this.request<void>(`/exams/${id}`, {
      method: 'DELETE',
    });
  }

  // Attempt endpoints
  async getAttempts(): Promise<Attempt[]> {
    return this.request<Attempt[]>('/attempts');
  }

  async getAttempt(id: string): Promise<Attempt> {
    return this.request<Attempt>(`/attempts/${id}`);
  }

  async submitAttempt(examId: string, answers: Record<string, number>): Promise<Attempt> {
    return this.request<Attempt>('/attempts/submit', {
      method: 'POST',
      body: JSON.stringify({ examId, answers }),
    });
  }
}

export const apiClient = new ApiClient(API_BASE_URL); 
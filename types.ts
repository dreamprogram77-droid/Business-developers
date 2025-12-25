
export enum ServiceType {
  CONSULTING = 'CONSULTING',
  MAILBOX = 'MAILBOX',
  RECEPTIONIST = 'RECEPTIONIST',
  LOGISTICS = 'LOGISTICS',
  VIRTUAL_LAB = 'VIRTUAL_LAB',
  NETWORKING = 'NETWORKING',
  TASK_MANAGER = 'TASK_MANAGER',
  NETWORK_INTELLIGENCE = 'NETWORK_INTELLIGENCE',
  MARKETING_STUDIO = 'MARKETING_STUDIO'
}

export interface BusinessGenome {
  industrySector: string;
  servicesOffered: string[];
  servicesNeeded: string[];
  targetMarkets: string[];
  companySize: 'Startup' | 'SME' | 'Enterprise';
  collaborationPreferences: string[];
}

export interface Business {
  id: string;
  name: string;
  description: string;
  category: string;
  logoUrl: string;
  color: string;
  isOccupied: boolean;
  gridPosition: { x: number; y: number };
  activeVisitors?: number;
  services?: string[];
  genomeProfile?: BusinessGenome;
  contact?: {
    email?: string;
    phone?: string;
    website?: string;
  };
}

export interface MarketingSuite {
  pitch: string;
  slogan: string;
  linkedinPost: string;
  targetAudience: string;
}

export interface MatchAnalysisPoint {
  factor: string;
  description: string;
}

export interface MatchResult {
  companyId: string;
  score: number;
  matchReason: string;
  sharedInterests: string[];
  collaborationOpportunity: string;
  analysisPoints?: MatchAnalysisPoint[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: Date;
}

export interface NetworkingPost {
  id: string;
  author: string;
  content: string;
  tags: string[];
  likes: number;
}

export interface Invoice {
  id: string;
  planName: string;
  amount: string;
  date: Date;
  status: 'pending' | 'paid';
  reference: string;
}

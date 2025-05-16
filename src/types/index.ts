export interface IdeaData {
  title: string;
  description: string;
  industry: string;
  targetAudience: string;
  uniqueSellingPoint: string;
  competitors: string;
  revenueModel: string;
}

export interface SwotItem {
  title: string;
  description: string;
}

export interface SwotAnalysis {
  strengths: SwotItem[];
  weaknesses: SwotItem[];
  opportunities: SwotItem[];
  threats: SwotItem[];
}

export interface MarketSizing {
  totalAddressableMarket: string;
  servicedAvailableMarket: string;
  servicedObtainableMarket: string;
  growthRate: string;
}

export interface FeasibilityScore {
  overall: number;
  technical: number;
  market: number;
  financial: number;
  team: number;
}

export interface AnalysisResult {
  feasibility: FeasibilityScore;
  swot: SwotAnalysis;
  marketSizing: MarketSizing;
  pitch: string;
}
export interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

export type SubsResponseFromApi = Array<{
  nick: string;
  months: number;
  profileUrl: string;
  description?: string;
}>;

export interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

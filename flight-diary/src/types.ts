export enum Weather  {Sunny = "sunny", Windy = "windy", Rainy = "rainy", Stormy = "stormy", Cloudy = "cloudy"}

export enum Visibility {Great = "great",  Good = "good", Ok = "ok", Poor = "poor"}

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment?: string;
}

  
export type NewDiaryEntry = Omit<DiaryEntry, "id">;
  
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, "comment">;
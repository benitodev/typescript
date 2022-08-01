import diaries from "../../data/daries";
import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry} from "../types";

//we used type assertions because data from JSON already has its types defined. Careful with this! 

// const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;


// TS just checks if we have all required fields 
// but excess field aren't prohibited
const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({id, date, weather, visibility})=>({
    id, date, weather, visibility
  }));
};

const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

const getEntry = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((diary) => diary.id === id);
  return entry;
};

const addEntry = (entry: NewDiaryEntry): DiaryEntry =>{
  const newDiaryEntry = {
    id: Math.max(...diaries.map(diary => diary.id)) + 1,
    ...entry
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

export default {getEntries, addEntry, getEntry, getNonSensitiveEntries};
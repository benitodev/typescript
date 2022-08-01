
import { NewDiaryEntry, Visibility, Weather } from "./types";


// we use instanceof if someone instantiates a string (Object) 
const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};


//when passing first through isString, the parameter would be a string no matter what
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isWeather = (param: any): param is Weather => {
  //i need to see if param weather includes something element in array of Weather type 
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Weather).includes(param);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isVisibility = (param: any): param is Visibility => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Visibility).includes(param);
};

//because date doesn't have a validate, just validate if is a string.
const parseDate = (date: unknown): string => {
  if(!date || !isString(date) || !isDate(date)){
    throw new Error('Incorrect or missing date');
  }
  return date;
};

const parseComment = (comment:unknown): string  =>{
  if(!comment || !isString(comment)){
    throw new Error('Incorrect or missing comment');
  }
  return comment;
};


const parseWeather = (weather: unknown): Weather => {
  if(!weather || !isWeather(weather)){
    throw new Error('Incorrect or missing weather');
  }
  return weather;
};

const parseVisibility = (visibility: unknown): Visibility => {
  if(!visibility || !isVisibility(visibility)){
    throw new Error('Incorrect or missing visibility');
  }
  return visibility;
};


type Fields = {comment: unknown, date: unknown, weather: unknown, visibility: unknown};

export const parseNewDiaryEntry = (object: Fields): NewDiaryEntry => {

  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  };

  return newEntry;
};


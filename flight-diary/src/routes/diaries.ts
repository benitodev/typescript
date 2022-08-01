import express from "express";
import diaryService from "../services/diaryService";
import { parseNewDiaryEntry } from "../utils";
const router = express.Router();

router.get('/', (_req, res)=>{
  res.send(diaryService.getEntries());
});

router.get('/:id', (req, res)=>{
  const diary = diaryService.getEntry(Number(req.params.id));
  if (diary) {
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
  res.send(diaryService.getEntries());
});

router.post('/', (req, res)=>{
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newDiaryEntry = parseNewDiaryEntry(req.body);
    const addedEntry = diaryService.addEntry(newDiaryEntry);
    res.json(addedEntry);
  } catch (err: unknown) {
    //narrowing. we need to be sure that err is a object with properties
    if(err instanceof Error){
      res.status(400).send(err.message);
    }else{
      console.log("Unexpected error", err);
      res.status(400).send("error");
    }
  }

});

export default router;
import { useState } from "react";
import Student from "../models/Student";

const useStudentViewModel = () => {
  const [students, setStudents] = useState([
    new Student("1", "Amit Sharma", 21, "B.Tech"),
    new Student("2", "Rahul Verma", 22, "B.Sc"),
    new Student("3", "Priya Singh dddd", 20, "B.Com"),
    new Student("3", "Priya Singh dddd", 20, "B.Com"),

    new Student("3", "Priya Singh dddd", 20, "B.Com"),

    new Student("3", "Priya Singh dddd", 20, "B.Com"),

    new Student("3", "Priya Singh dddd", 20, "B.Com"),

    new Student("3", "Priya Singh dddd", 20, "B.Com"),
    new Student("3", "Priya Singh dddd", 20, "B.Com"),


  ]);

  return { students };
};

export default useStudentViewModel;
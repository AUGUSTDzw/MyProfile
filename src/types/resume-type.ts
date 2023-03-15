import {BasicType} from "./basic-type";
import {SimpleListType} from "./simple-list-type";
import {EducationType} from "./education-type";
import {ExperienceType} from "./experience-type";

export type ResumeType = {
        basic: BasicType
        skills: string[]
        simpleLists: SimpleListType[]
        educations: EducationType[]
        experiences: ExperienceType[]
}
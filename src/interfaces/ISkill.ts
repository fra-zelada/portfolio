export interface ISkill {

    name:       string;
    image:      string;
    priority:   number;
    category:   string;
    knowledge:  number;

}

export interface ISoftSkill {
    title           :   string;
    description     :   string;
    image          ?:   string;
}
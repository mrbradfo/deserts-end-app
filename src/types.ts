export type Volunteer = {
  id: number;
  name: string;
  phone: string;
  schedule?: Schedule[];
};

export interface VolunteerProps {
  volunteers: Volunteer[] | undefined;
}

export type Schedule = {
  id: number;
  volunteerId: number;
  date: Date;
  time: string;
};

export interface ScheduleProps {
  schedules?: Schedule[];
}

export type VolunteerStoreData = {
  volunteers: Volunteer[];
};

export type VolunteerFormProps = {
  onAddVolunteer: (name: string, phone: string) => void;
};

export type VolunteerListProps = {
  volunteers: Volunteer[];
  onRemoveVolunteer: (id: number) => void;
};

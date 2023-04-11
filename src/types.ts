export type Volunteer = {
  id: number;
  name: string;
  phone: string;
};

export type Schedule = {
  id: number;
  volunteerId: number;
  date: Date;
  time: string;
};

export type VolunteerStoreData = {
  volunteers: Volunteer[];
};

export type ScheduleStoreData = {
  schedules: Schedule[];
};

export type VolunteerFormProps = {
  onAddVolunteer: (name: string, phone: string) => void;
};

export type VolunteerListProps = {
  volunteers: Volunteer[];
  onRemoveVolunteer: (id: number) => void;
};

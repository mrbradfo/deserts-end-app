export type Role = {
  id: number;
  user_id: number;
  position: string;
  date: string;
  description: string;
  confirmed: boolean;
};
export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  admin: boolean;
  blackout_dates: string;
  txt_alerts: boolean;
  email_alerts: boolean;
};
export type Volunteer = {
  user: User;
  roles: Role[];
};

export interface VolunteerProps {
  volunteers: Volunteer[] | undefined;
  roles: Role[] | undefined;
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

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
export type Team = {
  id: number;
  name: string;
  description: string;
  positions: string;
};

export type Plan = {
  id: number;
  name: string;
  description: string;
  date: Date;
};

export type Assignment = {
  id: number;
  user_id: number;
  plan_id: number;
  position: string;
  notes: string;
  date: Date;
};

export interface VolunteerProps {
  users: User[] | undefined;
  teams: Team[] | undefined;
  plans: Plan[] | undefined;
  assignments: Assignment[] | undefined;
}

// export interface ScheduleProps {
//   schedules?: Schedule[];
// }

// export type VolunteerStoreData = {
//   volunteers: Volunteer[];
// };

// export type VolunteerFormProps = {
//   onAddVolunteer: (name: string, phone: string) => void;
// };

// export type VolunteerListProps = {
//   volunteers: Volunteer[];
//   onRemoveVolunteer: (id: number) => void;
// };

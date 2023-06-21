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
  id: number;
  user: User;
  plan_id: number;
  confirmation_status: string;
  notes: string;
};

export type Position = {
  id: number;
  volunteers: Volunteer[]; // people assigned to this position
  name: string;
  capacity: number;
  filled: number;
};

export type Team = {
  id: number;
  name: string;
  description: string;
  positions: Position[];
};

export type Plan = {
  id: number;
  name: string;
  confirmed_count: number;
  pending_count: number;
  declined_count: number;
  teams: Team[];
  date: Date;
};

export type PlanView = {
  id: number;
  plan: Plan;
};

export interface VolunteerProps {
  users: User[] | undefined;
  teams: Team[] | undefined;
  plan_views: PlanView[] | undefined;
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

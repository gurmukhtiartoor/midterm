export type EmploymentTerm = 'FULL_TIME' | 'PART_TIME' | 'CONTRACT';

export interface Employee {
  name: string;
  salary: number;
  term: EmploymentTerm;
}

export const TERM_LABELS: Record<EmploymentTerm, string> = {
  FULL_TIME: 'Full Time',
  PART_TIME: 'Part Time',
  CONTRACT: 'Contract',
};

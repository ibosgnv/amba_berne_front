import {
  Component,
  Input,
  OnInit,
  computed,
  forwardRef,
  signal,
} from "@angular/core";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";

const MONTHS = [
  { value: 1,  label: "Janvier" },
  { value: 2,  label: "Février" },
  { value: 3,  label: "Mars" },
  { value: 4,  label: "Avril" },
  { value: 5,  label: "Mai" },
  { value: 6,  label: "Juin" },
  { value: 7,  label: "Juillet" },
  { value: 8,  label: "Août" },
  { value: 9,  label: "Septembre" },
  { value: 10, label: "Octobre" },
  { value: 11, label: "Novembre" },
  { value: 12, label: "Décembre" },
];

@Component({
  selector: "app-date-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./date-input.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
  ],
})
export class DateInputComponent implements ControlValueAccessor, OnInit {
  @Input() hasError = false;
  @Input() minYear = 1900;
  @Input() maxYear = new Date().getFullYear();

  protected readonly months = MONTHS;
  protected selectedDay: number | null = null;
  protected selectedMonth: number | null = null;
  protected selectedYear: number | null = null;
  protected isDisabled = false;

  protected readonly daysInMonth = computed(() => {
    const m = this.monthSig();
    const y = this.yearSig();
    if (!m) return 31;
    return new Date(y ?? 2000, m, 0).getDate();
  });

  protected readonly dayOptions = computed(() =>
    Array.from({ length: this.daysInMonth() }, (_, i) => i + 1)
  );

  // Internal signals just for driving daysInMonth computation
  private readonly monthSig = signal<number | null>(null);
  private readonly yearSig = signal<number | null>(null);

  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit() {
    this.yearSig.set(this.selectedYear);
    this.monthSig.set(this.selectedMonth);
  }

  protected onPartChange() {
    this.monthSig.set(this.selectedMonth);
    this.yearSig.set(this.selectedYear);

    // Clamp day if it exceeds the new month's max days
    if (this.selectedDay && this.selectedDay > this.daysInMonth()) {
      this.selectedDay = this.daysInMonth();
    }

    this.onTouched();

    if (this.selectedDay && this.selectedMonth && this.selectedYear) {
      const d = String(this.selectedDay).padStart(2, "0");
      const m = String(this.selectedMonth).padStart(2, "0");
      this.onChange(`${this.selectedYear}-${m}-${d}`);
    } else {
      this.onChange(null);
    }
  }

  // ControlValueAccessor
  writeValue(value: string | null): void {
    if (value && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      const [y, m, d] = value.split("-").map(Number);
      this.selectedYear = y;
      this.selectedMonth = m;
      this.selectedDay = d;
      this.yearSig.set(y);
      this.monthSig.set(m);
    } else {
      this.selectedDay = null;
      this.selectedMonth = null;
      this.selectedYear = null;
    }
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}

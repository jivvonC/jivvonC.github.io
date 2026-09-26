"use client";

import { useEffect, useState } from "react";
import { seoulDate } from "@/lib/date";

/** The static export freezes the build date, so refresh it in the browser. */
export function LocalDate({ initial }: { initial: string }) {
  const [value, setValue] = useState(initial);

  useEffect(() => setValue(seoulDate()), []);

  return <span>{value}</span>;
}

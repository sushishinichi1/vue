import { setupWorker } from "msw";

import { handlers } from "./handler";

export const worker: any = setupWorker(...handlers);

import contextActionSelectorFactory from "contexts/contextActionSelectorFactory";
import { type Process, type Processes } from "contexts/process/types";
import useProcessContextState from "contexts/process/useProcessContextState";

const NO_PROCESS = Object.create(null) as Process;
type FocusableProcesses = Record<string, Pick<Process, "minimized">>;

export const hasProcess = (process: Process): boolean => process !== NO_PROCESS;

export const getNextFocusableId = (
  id: string,
  stackOrder: string[] | undefined,
  processes: FocusableProcesses = Object.create(null)
): string => {
  if (!Array.isArray(stackOrder)) return "";

  return (
    stackOrder.find(
      (stackId) => stackId !== id && !processes[stackId]?.minimized
    ) || ""
  );
};

const { Provider, useContextActions, useStateSelector } =
  contextActionSelectorFactory(useProcessContextState);

export const useNextFocusableId = (id: string, stackOrder: string[]): string =>
  useStateSelector((state) =>
    getNextFocusableId(id, stackOrder, state.processes || Object.create(null))
  );

export const useProcess = (id: string): Process =>
  useStateSelector((state) => state.processes?.[id] || NO_PROCESS);

export const useProcesses = (): Processes =>
  useStateSelector(
    (state) => state.processes || (Object.create(null) as Processes)
  );

export const useProcessesRef = (): React.RefObject<Processes> =>
  useStateSelector((state) => state.processesRef);

export {
  Provider as ProcessProvider,
  useContextActions as useProcessesActions,
};

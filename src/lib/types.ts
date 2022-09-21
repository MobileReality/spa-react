import type { OperationContext } from 'urql';

export type Refetch = {
    refetch: (opts?: Partial<OperationContext>) => void;
};

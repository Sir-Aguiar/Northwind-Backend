type TDefaultExecute = Promise<void>;

interface IUseCase<TExecute = TDefaultExecute> {
  execute(): TExecute;
}

export type { IUseCase };

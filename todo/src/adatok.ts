export type AllapotTipus = "kész" | "folyamatban" | "törölve" | "létrehozva"
export interface TodoTipus{
    id: number,
    tennivalo: string,
    allapot: AllapotTipus
}

export const TODOLISTA: TodoTipus[] = [
    {
        id: 1,
        tennivalo:"Tanulni dolgozatra",
        allapot: "folyamatban"
    },
       {
        id: 2,
        tennivalo:"Tanulni" ,
        allapot: "törölve"
    },
       {
        id: 3,
        tennivalo:"context feladat önállaóan",
        allapot: "folyamatban"
    }
]
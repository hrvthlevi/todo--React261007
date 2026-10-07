/* itt fogjuk kezelni az állapotot
Létrehozunk egy contextet és egy privodert
A context az a környezet, amin belük a provider adatai vanna
1. Context és provider létrehozása
2. Providerben használt statek és függvények megadása
3. szülőkomponens ölelgetése a providerrel
4. felhasználni a componensekben a provider value-ban 
*/

import { createContext, useContext, useState, type ReactNode } from "react";
import { TODOLISTA, type AllapotTipus, type TodoTipus } from "../adatok";

interface FeladatokContextValue {
  lista: TodoTipus[];
  setAllapot: (index: number, allapot: AllapotTipus) => void;
}
export const TodoContext = createContext<FeladatokContextValue | undefined>(
  undefined,
);

interface TodoProviderProps {
  children: ReactNode;
}
export function TodoProvider({ children }: TodoProviderProps) {
  const [lista, setLista] = useState<TodoTipus[]>(TODOLISTA);

  function setAllapot(index: number, allapot: AllapotTipus) {
    console.log(index, allapot);
    /* 3 lépésben módosítjuk a lista állapotát */
    const ujLista: TodoTipus[] = [...lista];
    ujLista[index].allapot = allapot;
    setLista(ujLista);
  }
  return (
    <TodoContext.Provider value={{ lista, setAllapot }}>
      {children}
    </TodoContext.Provider>
  );
}

/* A saját hook olyan fgv. ami használhatunk a komponensekben */
export function useTodoContext(){
    const context = useContext(TodoContext)
    if(context===undefined){
    throw new Error("Az app csak provideren belül használjható")
   }
   return context
}
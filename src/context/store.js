import React, { createContext, useState } from "react";

const cards = [
  {
    id: "card-1",
    title: "Learning to code",
  },
  {
    id: "card-2",
    title: "Reading a book",
  },
  {
    id: "id-3",
    title: "Gym work",
  },
];

const initialState = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Backlog",
      cards: cards,
    },
    "list-2": {
      id: "list-2",
      title: "On Progres",
      cards: [],
    },
  },
  listIds: ["list-1", "list-2"],
};

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [store, setStore] = useState(initialState);

  const changeTitle = (id, text) => {
    const item = store.lists[id];
    // console.log(store);
    item.title = text;
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [id]: item,
      },
    };
    setStore(newStore);
  };

  const cardDelete = (listId, cardId) => {
    const item = store.lists[listId];
    const removeCard = item.cards.filter((card) => card.id !== cardId);
    item.cards = removeCard;
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [listId]: item,
      },
    };
    setStore(newStore);
  };

  const cardEdit = (listId, cardId, idx, text) => {
    const item = store.lists[listId];
    const card = item.cards.find((item) => item.id === cardId);
    card.title = text;
    item.cards.splice(idx, 1, card);
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [listId]: item,
      },
    };
    setStore(newStore);
  };
  return (
    <DataContext.Provider value={{ store, changeTitle, cardDelete, cardEdit }}>
      {props.children}
    </DataContext.Provider>
  );
};
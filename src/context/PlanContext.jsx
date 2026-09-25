"use client";

import { createContext, useContext, useState, useEffect } from "react";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [planItems, setPlanItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem("plan") || "[]");
    const s = JSON.parse(localStorage.getItem("saved") || "[]");
    setPlanItems(p);
    setSavedItems(s);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("plan", JSON.stringify(planItems));
  }, [planItems, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem("saved", JSON.stringify(savedItems));
  }, [savedItems, hydrated]);

  const addToPlan = (workout) => {
    if (planItems.length >= 5) return false;
    if (planItems.find((w) => w.id === workout.id)) return false;
    setPlanItems((prev) => [...prev, { ...workout, done: false }]);
    return true;
  };

  const addToSaved = (workout) => {
    if (savedItems.find((w) => w.id === workout.id)) return false;
    setSavedItems((prev) => [...prev, workout]);
    return true;
  };

  const removeFromPlan = (id) =>
    setPlanItems((prev) => prev.filter((w) => w.id !== id));
  const removeFromSaved = (id) =>
    setSavedItems((prev) => prev.filter((w) => w.id !== id));
  const markDone = (id) =>
    setPlanItems((prev) =>
      prev.map((w) => (w.id === id ? { ...w, done: !w.done } : w)),
    );

  return (
    <PlanContext.Provider
      value={{
        planItems,
        savedItems,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markDone,
        hydrated,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => useContext(PlanContext);

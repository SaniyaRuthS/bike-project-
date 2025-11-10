import React, { createContext, useContext, useEffect, useState } from "react";

const BikeContext = createContext(null);
const LOCAL_KEY = "bike-health-state-v1";

const defaultState = {
  owner: {
    name: "Varghese G T",
    email: "you@example.com",
    phone: "+91-98765-43210"
  },
  bike: {
    number: "TN-09-AB-1234",
    model: "Yamaha R15 V4",
    year: 2024
  },
  metrics: {
    totalKmRun: 15234,
    tripDistanceKm: 86,
    averageSpeedKmph: 62,
    mileageKmPerLitre: 38,
    overallHealthScore: 92,
    fuelLeftPercent: 32
  },
  health: {
    engine: 94,
    battery: 88,
    tyres: 86,
    brakes: 90
  },
  maintenance: {
    lastServiceKm: 14000,
    serviceIntervalKm: 3000,
    lastOilChangeKm: 13500,
    oilChangeIntervalKm: 2500,
    nextServiceDate: "2025-11-25"
  }
};

export function BikeProvider({ children }) {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_KEY);
      if (saved) {
        setState((prev) => ({ ...prev, ...JSON.parse(saved) }));
      }
    } catch (e) {
      console.warn("Failed to load state from localStorage", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Failed to save state to localStorage", e);
    }
  }, [state]);

  const kmToNextService =
    state.maintenance.lastServiceKm + state.maintenance.serviceIntervalKm -
    state.metrics.totalKmRun;

  const oilChangeDue =
    state.metrics.totalKmRun - state.maintenance.lastOilChangeKm >=
    state.maintenance.oilChangeIntervalKm;

  const updateMetrics = (patch) => {
    setState((prev) => ({
      ...prev,
      metrics: { ...prev.metrics, ...patch }
    }));
  };

  const updateMaintenance = (patch) => {
    setState((prev) => ({
      ...prev,
      maintenance: { ...prev.maintenance, ...patch }
    }));
  };

  const updateHealth = (patch) => {
    setState((prev) => ({
      ...prev,
      health: { ...prev.health, ...patch }
    }));
  };

  return (
    <BikeContext.Provider
      value={{
        state,
        kmToNextService: Math.max(kmToNextService, 0),
        oilChangeDue,
        updateMetrics,
        updateMaintenance,
        updateHealth
      }}
    >
      {children}
    </BikeContext.Provider>
  );
}

export function useBike() {
  const ctx = useContext(BikeContext);
  if (!ctx) throw new Error("useBike must be used inside BikeProvider");
  return ctx;
}

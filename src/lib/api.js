// 'use client'
// new // https://api.api-store.workers.dev/api/fitlog

// old // https://api.abcz.workers.dev/api/fitlog
export const getAllWorkouts = async () => {
  try {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch workouts");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// new // https://api.api-store.workers.dev/api/fitlog/:id

// old // https://api.abcz.workers.dev/api/fitlog
export const getWorkoutById = async (id) => {
  // const { id } = await params;
  try {
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch workout");
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

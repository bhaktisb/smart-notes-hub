const API_BASE_URL = "https://smart-notes-backend-rtl8.onrender.com";

export const fetchNotes = async () => {

  try {

    const response = await fetch(
      `${API_BASE_URL}/notes`
    );

    const data = await response.json();

    return data;

  } catch (error) {

    console.error(
      "Error fetching notes:",
      error
    );

  }

};

export const createNote = async (note) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    return await response.json();
  } catch (error) {
    console.error("Error creating note:", error);
  }
};

export const deleteNote = async (id) => {

  try {

    await fetch(
      `${API_BASE_URL}/notes/${id}`,
      {
        method: "DELETE"
      }
    );

  } catch (error) {

    console.error(
      "Error deleting note:",
      error
    );

  }

};
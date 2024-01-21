const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;

export const getAudioUrls = async ({ id }) => {
  const res = await fetch(`${baseUrl}/song/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

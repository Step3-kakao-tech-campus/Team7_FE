export const getTilWriteUrl = (roadmapId: number, stepId: number, tilId: number) => {
  return `/TILWrite?roadmapId=${roadmapId}&?stepId=${stepId}&?tilId=${tilId}`;
};

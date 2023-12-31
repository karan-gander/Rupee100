// @mui
import { Skeleton, Stack } from "@mui/material";

// ----------------------------------------------------------------------

export default function SkeletonMap() {
  return (
    <Stack spacing={8}>
      {...Array(5)
        .fill(null)
        .map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            sx={{ width: 1, height: 560, borderRadius: 2 }}
          />
        ))}
    </Stack>
  );
}

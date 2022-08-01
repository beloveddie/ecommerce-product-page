import { IconButton, Tooltip } from "@mui/material";

export const IconPrevious = () => {
  return (
    <Tooltip title="View Previous item">
      <IconButton>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </IconButton>
    </Tooltip>
  );
};

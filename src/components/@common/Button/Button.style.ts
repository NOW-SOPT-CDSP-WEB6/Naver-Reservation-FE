import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const btnStyle = css({
    display: "flex",
    justifyContent: "center",
    textAlign: "center",

    width: "100%",
    height: "100%",
    
    padding: "10px 44px",

    borderRadius: "8px",
    borderWidth: "0",
});

export const btnVariant = {
    next: css({
        color: "white",
        backgroundColor: Theme.color.blue300
    }),

    review: css({
        color: Theme.color.gray700,
        backgroundColor: Theme.color.gray500
    }),

    look: css({
        color: "white",
        backgroundColor: Theme.color.blue300,
    }),
}

export const btnSize = {
    small: css({
        
    }),

    medium: css({

    }),
}
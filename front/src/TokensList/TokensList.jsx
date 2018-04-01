import React from "react";
import TokenItem from "./TokenItem.jsx";
import TokenView from "./TokenView";
import { inject, observer } from "mobx-react";
import "./TokenList.css";

export default inject("gradientTokenStore", "modalStore")(
  observer(
    ({ gradientTokenStore: { tokens, mintToken, isOwner }, modalStore }) => {
      return (
        <div style={{ marginTop: 50 }}>
          <h1>Gradient Tokens</h1>
          <button
            className={`button ${!isOwner && "is-disabled"}`}
            onClick={mintToken}
          >
            Mint token
          </button>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: "30px 20px",
              maxWidth: 800,
              margin: "50px auto"
            }}
          >
            {tokens.map((token, index) => (
              <TokenItem
                key={index}
                token={token}
                onClick={() =>
                  modalStore.showModal(<TokenView token={token} />)
                }
              />
            ))}
          </div>
        </div>
      );
    }
  )
);

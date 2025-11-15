import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem; /* Somente espaçamento vertical */
    margin-top: 1.5rem;
  }

  thead th {
    background: ${(props) => props.theme["gray-800"]};
    padding: 1rem 2rem;
    text-align: left;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${(props) => props.theme["gray-300"]};
    border-bottom: 2px solid ${(props) => props.theme["gray-600"]};
    user-select: none;
  }

  tbody td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["gray-300"]};
    font-size: 0.875rem;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighlightProps {
  variant: "entry" | "exit";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "entry"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;


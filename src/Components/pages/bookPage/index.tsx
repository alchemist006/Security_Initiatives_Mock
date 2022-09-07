import React from "react";
import { useParams } from "react-router-dom";
import BookPageDetails from "../../organisms/BookPageDetails";
import LandingTemplate from "../../templates/landingTemplate";

export interface BookProps {
  id ?: number;
}

 const BookPage = ({id} : BookProps) => {
  const params = useParams();

  return (
    <LandingTemplate template={<BookPageDetails id={id == null ? Number(params.id) : id} />} library={false} />
  );
};

export default BookPage;

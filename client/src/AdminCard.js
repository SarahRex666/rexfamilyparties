import React from "react";
import { useEffect, useState } from "react";

function AdminCard({ rsvps }) {
  if (rsvps) {
    return (
      <div>
        {rsvps.map((rsvp) => (
          <li>
            {rsvp.attending ? "Attending" : "Not attending"},{" "}
            {rsvp.dietary_restriction},{" "}
            {rsvp.kids ? "We're bringing kids!" : "No kids"},{rsvp.total_guests}
          </li>
        ))}
      </div>
    );
  }
  return <div></div>;
}
export default AdminCard;

"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/firebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import styled from "styled-components";
import Swal from "sweetalert2";

// 🎨 THEME COLORS
const PrimaryNavy = "rgba(115, 23, 28, 0.95)";
const ThemeGradient = "linear-gradient(135deg, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%)";

const Dark = "#0f172a";
const Border = "#cbd5e1";
const White = "#ffffff";
const TextMuted = "#475569";
const LightBg = "#f8fafc";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${Dark};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 10px;
  box-sizing: border-box;
  background-color: ${LightBg};
  min-height: 100vh;
`;

const HeaderBanner = styled.div`
  background: ${ThemeGradient};
  color: ${White};
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 10px 25px rgba(115, 23, 28, 0.15);
`;

const ColorfulTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 900;
  margin: 0;
  color: ${White};
`;

const ColorfulSub = styled.p`
  font-size: 0.95rem;
  margin: 0;
  color: #f8fafc;
  opacity: 0.95;
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 0.9rem;
  outline: none;
  color: ${Dark};
  width: 300px;
  max-width: 100%;
  background: ${White};
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);

  &:focus {
    border-color: ${PrimaryNavy};
    box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
  }
`;

const BackButton = styled.button`
  background: ${White};
  color: ${PrimaryNavy};
  border: 1px solid ${PrimaryNavy};
  border-radius: 8px;
  padding: 8px 14px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(115, 23, 28, 0.05);
    color:white;
  }
`;

// Scrollable Table Wrapper Container
const TableContainer = styled.div`
  background: ${White};
  border-radius: 12px;
  border: 1px solid ${Border};
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.04);
  max-height: 600px; /* Vertical scroll threshold */
  overflow-y: auto;
  overflow-x: auto; /* Horizontal scroll support */
  width: 100%;
  box-sizing: border-box;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  min-width: 850px; /* Forces horizontal scroll on small viewports */
`;

const Th = styled.th`
  background: #f1f5f9;
  color: ${TextMuted};
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 12px 16px;
  border-bottom: 2px solid ${Border};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Td = styled.td`
  padding: 12px 16px;
  font-size: 0.85rem;
  color: ${Dark};
  border-bottom: 1px solid ${Border};
  vertical-align: middle;
`;

const Badge = styled.span`
  font-family: monospace;
  font-weight: 700;
  color: ${PrimaryNavy};
  background: rgba(115, 23, 28, 0.08);
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px dashed rgba(115, 23, 28, 0.3);
`;

const LoadingContainer = styled.div`
  padding: 40px;
  text-align: center;
  color: ${TextMuted};
  font-weight: 600;
`;

export default function TicketParticipantsPage() {
  const params = useParams();
  const router = useRouter();
  const ticketId = params?.ticketId;

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [eventTitle, setEventTitle] = useState("Event Ticket");


  console.log(orders)

  useEffect(() => {
    if (!ticketId) return;

    // Real-time query for orders corresponding to this specific ticketId
    const q = query(collection(db, "orders"), where("ticketId", "==", ticketId));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const list = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(list);
        if (list.length > 0 && list[0].eventName) {
          setEventTitle(list[0].eventName);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching participants:", error);
        setLoading(false);
        Swal.fire("Error", "Could not load participant orders.", "error");
      }
    );

    return () => unsubscribe();
  }, [ticketId]);

  // Filter orders by Name, Email, or Ticket Code
  const filteredOrders = orders.filter((item) => {
    const name = item.accountInfo?.name?.toLowerCase() || "";
    const email = item.accountInfo?.email?.toLowerCase() || "";
    const code = item.assignedTicketCode?.toLowerCase() || "";
    const term = search.toLowerCase();

    return name.includes(term) || email.includes(term) || code.includes(term);
  });

  if (loading) {
    return <LoadingContainer>Loading participant records...</LoadingContainer>;
  }

  return (
    <Container>
      <HeaderBanner>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <ColorfulTitle>Participant Orders 🎟️</ColorfulTitle>
          <BackButton onClick={() => router.back()}>← Back to Tickets</BackButton>
        </div>
        <ColorfulSub>Showing ticket purchases and registered attendees for: <strong>{eventTitle}</strong></ColorfulSub>
      </HeaderBanner>

      <ActionRow>
        <SearchInput
          type="text"
          placeholder="Search by participant name, email, or ticket code..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span style={{ fontSize: "0.85rem", fontWeight: "700", color: TextMuted }}>
          Total Registrations: {filteredOrders.length}
        </span>
      </ActionRow>

      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <Th>Ticket Code</Th>
              <Th>Participant Name</Th>
              <Th>Email Address</Th>
              <Th>Phone Number</Th>
              <Th>Tier Level</Th>
              <Th>Amount Paid</Th>
              <Th>Order Date</Th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <Td colSpan="7" style={{ textAlign: "center", padding: "40px", color: TextMuted }}>
                  No participant orders found matching your search.
                </Td>
              </tr>
            ) : (
              filteredOrders.map((order) => {
                const dateStr = order.createdAt?.toDate 
                  ? order.createdAt.toDate().toLocaleDateString('en-US', { dateStyle: 'medium' }) 
                  : 'Recent';

                return (
                  <tr key={order.id}>
                    <Td><Badge>{order.assignedTicketCode || "N/A"}</Badge></Td>
                    <Td style={{ fontWeight: "700" }}>{order.accountInfo?.name || "N/A"}</Td>
                    <Td>{order.accountInfo?.email || "N/A"}</Td>
                    <Td>{order.accountInfo?.phone || "N/A"}</Td>
                    <td><span style={{ fontWeight: "600", color: PrimaryNavy }}>{order.tierLevel}</span></td>
                    <Td style={{ fontWeight: "800" }}>₦{Number(order.amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}</Td>
                    <Td style={{ color: TextMuted }}>{dateStr}</Td>
                  </tr>
                );
              })
            )}
          </tbody>
        </StyledTable>
      </TableContainer>
    </Container>
  );
}
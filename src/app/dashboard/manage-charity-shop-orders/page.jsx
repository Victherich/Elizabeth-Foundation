'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/firebaseConfig';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import styled from 'styled-components';

// 🎨 THEME COLORS
const PrimaryNavy = "#611317"; // Burgundy accent theme
const ThemeGradient = "linear-gradient(135deg, #611317 0%, #4a0e12 100%)";
const Dark = "#0f172a";
const Border = "#cbd5e1";
const White = "#ffffff";
const TextMuted = "#475569";
const LightBg = "#f8fafc";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${Dark};
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 70px 16px;
  box-sizing: border-box;
  min-height: 100vh;
`;

const HeaderBanner = styled.div`
  background: ${ThemeGradient};
  color: ${White};
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 10px 25px rgba(97, 19, 23, 0.15);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 900;
  margin: 0;
  color: ${White};
  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  margin: 0;
  color: #f8fafc;
  opacity: 0.95;
  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const ControlsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  border: 1px solid ${Border};
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 0.95rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  max-width: 360px;
  background: ${White};
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);

  &:focus {
    border-color: ${PrimaryNavy};
    box-shadow: 0 0 0 3px rgba(97, 19, 23, 0.15);
  }
`;

const OrdersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const OrderCard = styled.div`
  background: ${White};
  border-radius: 12px;
  border: 1px solid ${Border};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(97, 19, 23, 0.12);
    border-color: rgba(97, 19, 23, 0.3);
  }
`;

const OrderHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderNumberTag = styled.span`
  font-size: 0.8rem;
  font-weight: 800;
  color: ${PrimaryNavy};
  background: rgba(97, 19, 23, 0.08);
  padding: 4px 8px;
  border-radius: 6px;
  font-family: monospace;
`;

const StatusBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 20px;
  background: ${(props) => (props.$success ? '#f0fdf4' : '#fef2f2')};
  color: ${(props) => (props.$success ? '#166534' : '#991b1b')};
`;

const CustomerName = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 800;
  color: ${Dark};
`;

const OrderMetaText = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: ${TextMuted};
`;

const TotalPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 900;
  color: ${Dark};
  margin-top: 4px;
`;

const LoadingContainer = styled.div`
  padding: 50px;
  text-align: center;
  color: ${TextMuted};
  font-weight: 600;
  font-size: 1.1rem;
`;

/* 🔍 MODAL STYLES */
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 16px;
  box-sizing: border-box;
`;

const ModalContainer = styled.div`
  background: ${White};
  border-radius: 14px;
  padding: 24px;
  width: 100%;
  max-width: 550px;
  max-height: 85vh;
  overflow-y: auto;
  border: 1px solid ${Border};
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Border};
  padding-bottom: 12px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${Dark};
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.3rem;
  font-weight: 800;
  color: ${TextMuted};
  cursor: pointer;
  &:hover {
    color: ${Dark};
  }
`;

const SectionHeader = styled.h4`
  margin: 0 0 6px 0;
  font-size: 0.9rem;
  font-weight: 800;
  color: ${PrimaryNavy};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InfoBox = styled.div`
  background: ${LightBg};
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.88rem;
  color: ${TextMuted};
`;

const ItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
  th {
    background: ${LightBg};
    padding: 8px;
    text-align: left;
    font-weight: 700;
    color: ${TextMuted};
    border-bottom: 1px solid ${Border};
  }
  td {
    padding: 10px 8px;
    border-bottom: 1px solid ${Border};
    color: ${Dark};
    vertical-align: middle;
  }
`;

export default function CharityShopOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Real-time query fetching all charity shop orders
    const q = query(collection(db, "charityShopOrders"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(list);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching charity shop orders:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Filter orders by orderNumber or assignedOrderCode
  const filteredOrders = orders.filter((order) => {
    const term = searchQuery.toLowerCase();
    const orderNo = (order.orderNumber || order.assignedOrderCode || "").toLowerCase();
    const customerName = (order.accountInfo?.name || "").toLowerCase();
    return orderNo.includes(term) || customerName.includes(term);
  });

  if (loading) {
    return <LoadingContainer>Loading charity shop orders...</LoadingContainer>;
  }

  return (
    <Container>
      <HeaderBanner>
        <Title>Charity Shop Orders 📦</Title>
        <Subtitle>View, search, and manage all customer purchases and fulfillment records.</Subtitle>
      </HeaderBanner>

      <ControlsBar>
        <SearchInput
          type="text"
          placeholder="Search by Order Number or Customer Name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div style={{ fontSize: "0.9rem", fontWeight: "700", color: TextMuted }}>
          Total: {filteredOrders.length} {filteredOrders.length === 1 ? "Order" : "Orders"}
        </div>
      </ControlsBar>

      {filteredOrders.length === 0 ? (
        <LoadingContainer>No charity shop orders found matching your search.</LoadingContainer>
      ) : (
        <OrdersGrid>
          {filteredOrders.map((order) => {
            const dateFormatted = order.createdAt?.toDate 
              ? new Date(order.createdAt.toDate()).toLocaleString() 
              : 'Recent';

            return (
              <OrderCard key={order.id} onClick={() => setSelectedOrder(order)}>
                <OrderHeaderRow>
                  <OrderNumberTag>{order.orderNumber || order.assignedOrderCode || order.id.slice(0, 8)}</OrderNumberTag>
                  <StatusBadge $success={order.paymentStatus === 'Paid'}>
                    {order.paymentStatus || 'Paid'}
                  </StatusBadge>
                </OrderHeaderRow>

                <div>
                  <CustomerName>{order.accountInfo?.name || 'Valued Customer'}</CustomerName>
                  <OrderMetaText>📞 {order.accountInfo?.phone || 'N/A'}</OrderMetaText>
                  <OrderMetaText>📅 {dateFormatted}</OrderMetaText>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", borderTop: `1px solid ${Border}`, paddingTop: "8px" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: "700", color: TextMuted }}>Items: {order.items?.length || 0}</span>
                  <TotalPrice>₦{Number(order.amount || 0).toLocaleString()}</TotalPrice>
                </div>
              </OrderCard>
            );
          })}
        </OrdersGrid>
      )}

      {/* 🔍 ORDER DETAILS MODAL */}
      {selectedOrder && (
        <ModalOverlay onClick={() => setSelectedOrder(null)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Order Details: {selectedOrder.orderNumber || selectedOrder.assignedOrderCode}</ModalTitle>
              <CloseButton onClick={() => setSelectedOrder(null)}>✕</CloseButton>
            </ModalHeader>

            <div>
              <SectionHeader>Customer Information</SectionHeader>
              <InfoBox>
                <div><strong>Name:</strong> {selectedOrder.accountInfo?.name || 'N/A'}</div>
                <div><strong>Email:</strong> {selectedOrder.accountInfo?.email || 'N/A'}</div>
                <div><strong>Phone:</strong> {selectedOrder.accountInfo?.phone || 'N/A'}</div>
              </InfoBox>
            </div>

            <div>
              <SectionHeader>Payment & Status</SectionHeader>
              <InfoBox>
                <div><strong>Payment Type:</strong> {selectedOrder.paymentType || 'ONLINE PAYMENT'}</div>
                <div><strong>Payment Status:</strong> {selectedOrder.paymentStatus || 'Paid'}</div>
                <div><strong>Order Status:</strong> {selectedOrder.orderStatus || 'Confirmed'}</div>
                <div><strong>Verification No:</strong> {selectedOrder.paymentVerificationNumber || 'N/A'}</div>
              </InfoBox>
            </div>

            <div>
              <SectionHeader>Purchased Items</SectionHeader>
              <ItemsTable>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th style={{ textAlign: "right" }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.items?.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <div style={{ fontWeight: "700" }}>{item.productName || item.name}</div>
                        <div style={{ fontSize: "0.75rem", color: TextMuted }}>Ref: {item.productReference || 'N/A'}</div>
                      </td>
                      <td>{item.quantity || 1}</td>
                      <td style={{ textAlign: "right", fontWeight: "700" }}>
                        ₦{Number((item.amount || 0) * (item.quantity || 1)).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </ItemsTable>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `2px solid ${Border}`, paddingTop: "12px", marginTop: "4px" }}>
              <span style={{ fontWeight: "800", color: Dark }}>Total Amount Paid:</span>
              <span style={{ fontSize: "1.2rem", fontWeight: "900", color: PrimaryNavy }}>
                ₦{Number(selectedOrder.amount || 0).toLocaleString()}
              </span>
            </div>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
}
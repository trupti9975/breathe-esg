# DECISIONS

## 1. Chose CSV uploads for SAP and utility data
Reason:
Enterprise systems commonly export operational data as flat CSV files. CSV uploads were easier to prototype within the assignment timeline.

---

## 2. Used Django REST Framework for backend
Reason:
Django REST Framework provides fast API development, serialization support, and clean integration with database models.

---

## 3. Used React for frontend dashboard
Reason:
React provides a simple and responsive UI for analysts to review uploaded ESG records.

---

## 4. Added suspicious row detection
Reason:
Analysts should quickly identify abnormal records such as unusually high electricity usage.

Implementation:
Records with quantity greater than 1000 are automatically marked as FLAGGED.

---

## 5. Used SQLite database
Reason:
SQLite was sufficient for prototype development and reduced setup complexity.

---

## 6. Implemented approve/reject workflow
Reason:
The assignment required analyst review before audit locking.

Status values:
- PENDING
- APPROVED
- REJECTED
- FLAGGED

---

## 7. Chose file upload ingestion instead of live APIs
Reason:
Live SAP and travel platform integrations would require authentication, enterprise credentials, and additional infrastructure beyond prototype scope.

---

## 8. Focused on core ingestion workflow
Reason:
Priority was given to ingestion, normalization, analyst review, and audit visibility instead of advanced UI features.

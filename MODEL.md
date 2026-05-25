# Data Model

The system stores emission data from multiple enterprise sources.

Main entities:
- EmissionRecord
- Source tracking
- Analyst review status

Each record stores:
- source type
- category
- quantity
- unit
- status
- upload timestamp

Status flow:
PENDING → APPROVED / REJECTED / FLAGGED

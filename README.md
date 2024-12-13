# Aadhaar Status API Documentation

## 1. API Endpoints

### 1.1 Check Aadhaar Status
- **Endpoint**: `GET /v1/api/check-aadhaar-status`
- **Description**: Verifies whether the Aadhaar Card Fetch API is operational or down.

#### Request
```http
GET /v1/api/check-aadhaar-status
Content-Type: application/json
```

#### Response
##### Success
- **Status Code**: `200 OK`
- **Body**:
```json
{
    "message": "working"
}
```

##### Failure
- **Status Code**: `503 Service Unavailable`
- **Body**:
```json
{
    "message": "not_working"
}
```

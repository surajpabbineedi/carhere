# 🧪 CarHere Testing Guide

## Quick Testing Checklist

- [x] Backend API endpoints work
- [x] Frontend components render correctly
- [x] Frontend connects to backend
- [ ] All edge cases handled
- [ ] Performance optimized
- [ ] Mobile responsive
- [ ] Accessibility features

## 🔌 API Testing

### 1. Health Check

**cURL:**
```bash
curl http://localhost:5000/health
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Backend server is running",
  "timestamp": "2026-02-22T10:30:00.000Z"
}
```

### 2. Get All Services

**cURL:**
```bash
curl http://localhost:5000/api/services
```

**Expected Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "Oil Change",
      "description": "Professional oil change service",
      "price": 49.99,
      "category": "Maintenance",
      "rating": 4.8,
      "available": true,
      "duration": "30 mins"
    },
    ...more services...
  ],
  "message": "Services retrieved successfully"
}
```

### 3. Get Single Service

**cURL:**
```bash
curl http://localhost:5000/api/services/1
```

**Expected Response:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "name": "Oil Change",
    "description": "Professional oil change service",
    "price": 49.99,
    "category": "Maintenance",
    "rating": 4.8,
    "available": true,
    "duration": "30 mins"
  },
  "message": "Service retrieved successfully"
}
```

### 4. Filter Services by Category

**cURL:**
```bash
curl "http://localhost:5000/api/services?category=Maintenance"
```

**Expected Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "Oil Change",
      "category": "Maintenance",
      ...
    }
  ],
  "message": "Services retrieved successfully"
}
```

### 5. Get All Providers

**cURL:**
```bash
curl http://localhost:5000/api/providers
```

**Expected Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "AutoCare Solutions",
      "email": "info@autocare.com",
      "phone": "555-0101",
      "location": "Downtown",
      "rating": 4.8,
      "services": ["1", "2", "3", "5", "6"]
    },
    ...more providers...
  ],
  "message": "Providers retrieved successfully"
}
```

### 6. Get Single Provider

**cURL:**
```bash
curl http://localhost:5000/api/providers/1
```

### 7. Get Provider Services

**cURL:**
```bash
curl http://localhost:5000/api/providers/1/services
```

**Expected Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "Oil Change",
      ...
    },
    ...provider's services...
  ],
  "message": "Provider services retrieved successfully"
}
```

## 🧪 Using Postman

### Import Endpoints

1. Open Postman
2. Create new collection "CarHere"
3. Add these requests:

```
GET http://localhost:5000/health
GET http://localhost:5000/api/services
GET http://localhost:5000/api/services/1
GET http://localhost:5000/api/services?category=Maintenance
GET http://localhost:5000/api/providers
GET http://localhost:5000/api/providers/1
GET http://localhost:5000/api/providers/1/services
```

### Export as Collection

Save and share the collection with team members.

## 🎨 Frontend Component Testing

### 1. Button Component

**Test Code:**
```tsx
import Button from '@/src/components/shared/Button';

export default function ButtonTest() {
  return (
    <div className="p-8 space-y-4">
      <Button text="Primary Button" variant="primary" />
      <Button text="Secondary Button" variant="secondary" />
      <Button text="Danger Button" variant="danger" />
      <Button text="Disabled Button" disabled={true} />
      
      <Button 
        text="Click Me"
        onClick={() => alert('Button clicked!')}
      />
    </div>
  );
}
```

### 2. Card Component

**Test Code:**
```tsx
import Card from '@/src/components/shared/Card';

export default function CardTest() {
  return (
    <div className="p-8 grid grid-cols-3 gap-4">
      <Card
        title="Test Card 1"
        description="This is a test card"
        icon="🚗"
      />
      
      <Card
        title="Test Card 2"
        description="With custom content"
      >
        <p>Custom content inside card</p>
      </Card>
      
      <Card
        title="Test Card 3"
        description="Another test"
        icon="✅"
      />
    </div>
  );
}
```

### 3. ServiceItem Component

**Test Code:**
```tsx
import ServiceItem from '@/src/components/shared/ServiceItem';

export default function ServiceItemTest() {
  return (
    <div className="p-8 grid grid-cols-2 gap-4">
      <ServiceItem
        name="Oil Change"
        price="$49.99"
        rating={4.8}
        available={true}
      />
      
      <ServiceItem
        name="Car Wash"
        price="$39.99"
        rating={4.7}
        available={false}
      />
    </div>
  );
}
```

## 📱 Responsive Design Testing

### Mobile Devices
- Test on iPhone 12 (390px)
- Test on Android (360px)
- Portrait and landscape orientations

### Tablets
- iPad (768px)
- iPad Pro (1024px)

### Desktop
- 1366px (common laptop)
- 1920px (desktop)

**Using Browser DevTools:**
1. Open DevTools (F12)
2. Click responsive mode (Ctrl+Shift+M)
3. Select device from dropdown

## 🔍 Browser Compatibility

Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## ⚡ Performance Testing

### Frontend Performance

**Lighthouse Audit:**
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Click "Generate report"
4. Target: Score > 90

**Metrics to Check:**
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.8s

### Backend Performance

**Load Time:**
```bash
# Check API response time
time curl http://localhost:5000/api/services

# Should return in < 500ms
```

## 🔐 Security Testing

### Input Validation
- [ ] Test with empty inputs
- [ ] Test with special characters
- [ ] Test with very long strings
- [ ] Test with SQL injection attempts
- [ ] Test with XSS payloads

### Example Tests:
```bash
# Empty
curl "http://localhost:5000/api/services?"

# Special characters
curl "http://localhost:5000/api/services?category=Main%20tenance"

# Very long string
curl "http://localhost:5000/api/services?category=$(printf 'a%.0s' {1..1000})"
```

## 🐛 Error Handling Testing

### Test Error Scenarios

**Non-existent service:**
```bash
curl http://localhost:5000/api/services/999
```

Expected: 404 error

**Invalid route:**
```bash
curl http://localhost:5000/api/invalid
```

Expected: 404 "Route not found"

**Server error handling:**
Check that errors are properly caught and formatted.

## 🎯 Feature Testing

### Homepage
- [ ] Hero section displays correctly
- [ ] All buttons are clickable
- [ ] Cards display with proper styling
- [ ] Footer is visible
- [ ] Responsive on mobile

### Button Component
- [ ] All variants render correctly
- [ ] Disabled state works
- [ ] onClick handler fires
- [ ] Hover effects work

### Cards
- [ ] Text displays correctly
- [ ] Icons render properly
- [ ] Hover effects work
- [ ] Children content displays

### ServiceItem
- [ ] Service name displays
- [ ] Price shows correctly
- [ ] Rating displays with star
- [ ] Available/Unavailable badge shows

## 📊 Manual Test Cases

### Test Case 1: Homepage Load
1. Open http://localhost:3000
2. Wait for page to fully load
3. Verify all sections render
4. Check styling is correct

**Expected Result:** ✓ Pass

### Test Case 2: Click "Book Now"
1. Click "Book Now" button
2. Alert should appear

**Expected Result:** ✓ Pass

### Test Case 3: Click "Explore Services"
1. Click "Explore Services" button
2. Alert should appear

**Expected Result:** ✓ Pass

### Test Case 4: API Connection
1. Open browser console (F12)
2. Try to fetch API: `fetch('http://localhost:5000/api/services').then(r => r.json()).then(console.log)`
3. Check if data returns

**Expected Result:** ✓ Pass

### Test Case 5: Responsive Design
1. Open DevTools (F12)
2. Toggle responsive mode (Ctrl+Shift+M)
3. Test different screen sizes
4. Verify layout adapts

**Expected Result:** ✓ Pass

## 🔄 Automated Testing (Future)

### Unit Tests
```bash
npm install --save-dev jest @testing-library/react
npm test
```

### E2E Tests
```bash
npm install --save-dev cypress
npx cypress open
```

## 📋 Test Report Template

```
Date: __________
Tester: __________
Environment: Development/Staging/Production

PASSED TESTS:
- [ ] Test 1
- [ ] Test 2

FAILED TESTS:
- [ ] Test 1 - Description of failure

ISSUES FOUND:
1. Issue 1
2. Issue 2

NOTES:
- Note 1
- Note 2

Status: PASS/FAIL
```

## 🚀 Pre-Deployment Testing Checklist

- [ ] All API endpoints return correct data
- [ ] Frontend renders correctly
- [ ] Responsive design works on all devices
- [ ] No console errors
- [ ] No broken links
- [ ] Performance acceptable
- [ ] Security checks pass
- [ ] Error handling works
- [ ] Accessibility features work
- [ ] Documentation is complete

## 📞 Debugging Tips

### Frontend Debugging
```typescript
// Add console logs
console.log('Data:', data);

// Use debugger
debugger;

// Check network tab
- F12 → Network tab
- Look for API calls
- Check response status

// React DevTools
- Install React DevTools extension
- Inspect component props
- Check component state
```

### Backend Debugging
```typescript
// Add console logs
console.log('Request received:', req.body);

// Check network tab
- See request and response
- Check status codes
- Verify headers

// Use Postman
- Inspect request details
- Check response body
- Verify headers
```

## 🎓 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| API not responding | Check backend is running on :5000 |
| CORS error | Verify CORS is enabled in backend |
| Styling not loading | Clear cache, restart frontend |
| Components not rendering | Check browser console for errors |
| API returns 404 | Verify endpoint path is correct |
| Port already in use | Use different port or kill process |

---

**Happy Testing! 🎉**

Last Updated: February 22, 2026

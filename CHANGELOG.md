# 2022-11-02 15:00
 - New endpoint POST leads `/api/v1/leads` (status code reponses: 200, 400, 409 and 500).
 - New endpoint PATCH leads `/api/v1/leads/{id}` (status code responses: 204, 400, 409 and 500).
 - Improvements on DEV and QA environments (more info in README.md file).
 - Small refactors in order to allow future unit tests .

# 2022-11-17 16:15
 - New endpoint GET leads `/api/v1/leads/promotors/{id?}` (status code reponses: 200, 404 and 500).
 - New endpoint GET leads `/api/v1/leads/campaigns/{id?}` (status code reponses: 200, 404 and 500).

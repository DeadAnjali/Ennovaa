# Ennova
It is a collaborative software developed to create designs with multiple live users.

Business Login API


Design Files and Projects:
GET /api/files: Retrieve a list of design files belonging to the authenticated user.
POST /api/files: Create a new design file.
GET /api/files/{fileId}: Retrieve details of a specific design file.
PUT /api/files/{fileId}: Update details of a specific design file.
DELETE /api/files/{fileId}: Delete a specific design file.
GET /api/projects: Retrieve a list of projects belonging to the authenticated user.
POST /api/projects: Create a new project.
GET /api/projects/{projectId}: Retrieve details of a specific project.
PUT /api/projects/{projectId}: Update details of a specific project.
DELETE /api/projects/{projectId}: Delete a specific project.

Design Elements:
GET /api/files/{fileId}/elements: Retrieve a list of design elements within a specific design file.
POST /api/files/{fileId}/elements: Create a new design element within a specific design file.
GET /api/files/{fileId}/elements/{elementId}: Retrieve details of a specific design element.
PUT /api/files/{fileId}/elements/{elementId}: Update details of a specific design element.
DELETE /api/files/{fileId}/elements/{elementId}: Delete a specific design element.

Collaboration:
POST /api/files/{fileId}/collaborators: Add a collaborator to a specific design file.
DELETE /api/files/{fileId}/collaborators/{userId}: Remove a collaborator from a specific design file.
GET /api/files/{fileId}/comments: Retrieve comments associated with a specific design file.
POST /api/files/{fileId}/comments: Add a comment to a specific design file.


Assets:
GET /api/assets: Retrieve a list of assets available to the authenticated user.
POST /api/assets: Upload a new asset.
GET /api/assets/{assetId}: Retrieve details of a specific asset.
PUT /api/assets/{assetId}: Update details of a specific asset.
DELETE /api/assets/{assetId}: Delete a specific asset.

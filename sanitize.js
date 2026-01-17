// sanitize.js

module.exports = function sanitizeInput(input) {
    // Simple sanitization to prevent script tags
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

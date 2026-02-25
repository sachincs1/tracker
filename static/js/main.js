/**
 * JobTracker – main.js
 * Handles: delete modal population
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Delete Modal ──────────────────────────────────────────────────────────
  const deleteModal = document.getElementById('deleteModal');
  if (deleteModal) {
    deleteModal.addEventListener('show.bs.modal', (event) => {
      const btn     = event.relatedTarget;
      const jobId   = btn.dataset.jobId;
      const company = btn.dataset.jobCompany;

      // Populate modal company name
      document.getElementById('modal-company-name').textContent = company;

      // Set the form action to the correct delete URL
      document.getElementById('deleteForm').action = `/delete/${jobId}`;
    });
  }

  // ── Auto-dismiss alerts after 4 s ─────────────────────────────────────────
  document.querySelectorAll('.alert').forEach(alert => {
    setTimeout(() => {
      const bsAlert = bootstrap.Alert.getOrCreateInstance(alert);
      bsAlert.close();
    }, 4000);
  });

});

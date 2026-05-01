        // ============================================
        // CONFIGURACIÓN Y ESTADO
        // ============================================
        const MODULES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        const STORAGE_PREFIX = 'protocolo_claridad_';
        let currentModule = '0';
        let unsavedChanges = false;
        let autoSaveTimer = null;
        
        // ============================================
        // ELEMENTOS DEL DOM
        // ============================================
        const moduleSelect = document.getElementById('moduleSelect');
        const modules = document.querySelectorAll('.module');
        const exportBtn = document.getElementById('exportBtn');
        const clearBtn = document.getElementById('clearBtn');
        const toast = document.getElementById('toast');
        const progressFill = document.getElementById('progressFill');
        const autoSaveStatus = document.getElementById('autoSaveStatus');
        
        // ============================================
        // INICIALIZACIÓN
        // ============================================
        window.addEventListener('DOMContentLoaded', () => {
            loadAllNotes();
            attachEventListeners();
            updateProgressBar();
        });
        
        // ============================================
        // EVENT LISTENERS
        // ============================================
        function attachEventListeners() {
            // Cambio de módulo
            moduleSelect.addEventListener('change', (e) => {
                currentModule = e.target.value;
                showModule(currentModule);
                updateProgressBar();
            });
            
            // Todas las textareas guardan en tiempo real
            const textareas = document.querySelectorAll('textarea');
            textareas.forEach((textarea) => {
                const moduleNum = textarea.id.replace('notes', '');
                
                textarea.addEventListener('input', (e) => {
                    unsavedChanges = true;
                    saveNote(moduleNum, e.target.value);
                    debounceAutoSave();
                });
            });
            
            // Exportar PDF
            exportBtn.addEventListener('click', exportToPDF);
            
            // Limpiar todo
            clearBtn.addEventListener('click', clearAllData);
            
            // Prevención de cierre
            window.addEventListener('beforeunload', (e) => {
                if (unsavedChanges) {
                    e.preventDefault();
                    e.returnValue = '';
                }
            });
        }
        
        // ============================================
        // GESTIÓN DE MÓDULOS
        // ============================================
        function showModule(moduleNum) {
            modules.forEach(mod => {
                mod.classList.remove('active');
            });
            const activeModule = document.querySelector(`[data-module="${moduleNum}"]`);
            if (activeModule) {
                activeModule.classList.add('active');
            }
        }
        
        // ============================================
        // PERSISTENCIA - LOCALSTORAGE
        // ============================================
        
        function safeLocalStorageSet(key, value) {
            try {
                localStorage.setItem(key, value);
                return true;
            } catch (e) {
                console.error('Error al guardar en localStorage:', e);
                showToast('Error: No se pudo guardar. Verifique si está en modo incógnito.', 4000);
                return false;
            }
        }

        function safeLocalStorageGet(key) {
            try {
                return localStorage.getItem(key);
            } catch (e) {
                console.error('Error al leer de localStorage:', e);
                return null;
            }
        }
    \n        function saveNote(moduleNum, content) {
                if (content.length > 10000) {
                    showToast('Nota demasiado larga (máx 10,000 caracteres)', 3000);
                    return;
                }
    
            const key = `${STORAGE_PREFIX}notes_${moduleNum}`;
            safeLocalStorageSet(key, content);
            unsavedChanges = false;
            autoSaveStatus.textContent = 'Cambios guardados';
        }
        
        function loadNote(moduleNum) {
            const key = `${STORAGE_PREFIX}notes_${moduleNum}`;
            const content = safeLocalStorageGet(key);
            return content || '';
        }
        
        function loadAllNotes() {
            MODULES.forEach(moduleNum => {
                const textarea = document.getElementById(`notes${moduleNum}`) || document.getElementById(`notes`);
                if (textarea) {
                    textarea.value = loadNote(moduleNum);
                }
            });
        }
        
        // ============================================
        // DEBOUNCE PARA AUTO-SAVE
        // ============================================
        function debounceAutoSave() {
            clearTimeout(autoSaveTimer);
            autoSaveStatus.textContent = 'Guardando...';
            autoSaveTimer = setTimeout(() => {
                showToast('Cambios guardados', 2000);
                autoSaveStatus.textContent = 'Cambios guardados';
            }, 1500);
        }
        
        // ============================================
        // TOAST NOTIFICATION
        // ============================================
        function showToast(message, duration = 2000) {
            toast.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, duration);
        }
        
        // ============================================
        // EXPORT PDF
        // ============================================
        function exportToPDF() {
            const element = document.querySelector('.content-wrapper');
            const opt = {
                margin: 15,
                filename: 'Protocolo_de_Claridad_SLC_Completo.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
            };
            
            // Para que exporte todo y no solo la pestaña activa
            modules.forEach(mod => mod.style.display = 'block');
            
            html2pdf().set(opt).from(element).save().then(() => {
                // Restaurar la vista por pestañas después de exportar
                modules.forEach(mod => mod.style.display = '');
                showModule(currentModule);
                showToast('PDF exportado correctamente', 3000);
            });
        }
        
        // ============================================
        // CLEAR ALL DATA
        // ============================================
        function clearAllData() {
            const confirmed = confirm(
                '¿Está seguro de que desea borrar todos sus notas y cambios? Esta acción no se puede deshacer.'
            );
            
            if (confirmed) {
                MODULES.forEach(moduleNum => {
                    const key = `${STORAGE_PREFIX}notes_${moduleNum}`;
                    try { localStorage.removeItem(key); } catch(e) {}
                    const textarea = document.getElementById(`notes${moduleNum}`) || document.getElementById(`notes`);
                    if (textarea) {
                        textarea.value = '';
                    }
                });
                
                unsavedChanges = false;
                showToast('Todos los datos han sido eliminados', 3000);
            }
        }
        
        // ============================================
        // PROGRESS BAR
        // ============================================
        function updateProgressBar() {
            const currentIndex = MODULES.indexOf(currentModule);
            const progress = ((currentIndex + 1) / MODULES.length) * 100;
            progressFill.style.width = progress + '%';
        }
        
        // ============================================
        // CARGAR PRIMER MÓDULO
        // ============================================
        showModule('0');
    </script>
    <script>
    // Auto-resize textareas
    function autoResizeTextarea(elem) {
        elem.style.height = 'auto';
        elem.style.height = (elem.scrollHeight) + 'px';
    }
    
    document.querySelectorAll('textarea').forEach(elem => {
        elem.addEventListener('input', function() {
            autoResizeTextarea(this);
        });
        // Resize al cargar
        autoResizeTextarea(elem);
    });

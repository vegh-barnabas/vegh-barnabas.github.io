import { useCallback, useEffect, useState } from 'react';
import styles from 'routes/minecraft/Minecraft.module.scss';

const API_URL = 'https://mc-api.veghbarni.hu';

type Action = 'start' | 'stop';

type ServerStatus = {
  running: boolean;
  players: number;
  max_players: number;
};

export default function Minecraft() {
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState<Action | null>(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [statusLoading, setStatusLoading] = useState(false);
  const [statusError, setStatusError] = useState('');

  const fetchStatus = useCallback(async (key: string) => {
    if (!key.trim()) {
      setStatus(null);
      setStatusError('');
      return;
    }

    setStatusLoading(true);

    try {
      const response = await fetch(`${API_URL}/status`, {
        headers: {
          'X-API-Key': key.trim(),
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(
          response.status === 401
            ? 'Hibás API-kulcs.'
            : 'Nem sikerült lekérni a szerver állapotát.',
        );
      }

      const data: ServerStatus = await response.json();

      setStatus(data);
      setStatusError('');
    } catch (err) {
      setStatus(null);
      setStatusError(err instanceof Error ? err.message : 'Kapcsolódási hiba.');
    } finally {
      setStatusLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!apiKey.trim()) {
      setStatus(null);
      setStatusError('');
      return;
    }

    const timeout = window.setTimeout(() => {
      void fetchStatus(apiKey);
    }, 500);

    return () => window.clearTimeout(timeout);
  }, [apiKey, fetchStatus]);

  useEffect(() => {
    if (!apiKey.trim()) return;

    const interval = window.setInterval(() => {
      void fetchStatus(apiKey);
    }, 15000);

    return () => window.clearInterval(interval);
  }, [apiKey, fetchStatus]);

  async function control(action: Action) {
    if (!apiKey.trim() || loading) return;

    setLoading(action);
    setMessage('');
    setError(false);

    try {
      const response = await fetch(`${API_URL}/${action}`, {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey.trim(),
        },
      });

      if (!response.ok) {
        throw new Error(
          response.status === 401
            ? 'Hibás API-kulcs.'
            : 'Nem sikerült végrehajtani a műveletet.',
        );
      }

      setMessage(
        action === 'start'
          ? 'Az indítási kérés sikeresen elküldve.'
          : 'A leállítási kérés sikeresen elküldve.',
      );

      await fetchStatus(apiKey);
    } catch (err) {
      setError(true);
      setMessage(err instanceof Error ? err.message : 'Kapcsolódási hiba.');
    } finally {
      setLoading(null);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.panel}>
        <span className={styles.eyebrow}>MINECRAFT</span>
        <h1 className={styles.title}>Szervervezérlés</h1>

        <p className={styles.description}>
          Add meg a vezérlőkulcsot, majd indítsd el vagy állítsd le a szervert.
        </p>

        <label className={styles.label} htmlFor="minecraft-api-key">
          API-kulcs
        </label>

        <input
          id="minecraft-api-key"
          className={styles.input}
          type="password"
          value={apiKey}
          onChange={(event) => setApiKey(event.target.value)}
          placeholder="API-kulcs megadása"
          autoComplete="off"
          spellCheck={false}
        />

        {apiKey.trim() && (
          <div className={styles.statusPanel}>
            <div className={styles.statusHeader}>
              <span className={styles.label}>Szerver állapota</span>

              <span
                className={`${styles.statusBadge} ${
                  status
                    ? status.running
                      ? styles.online
                      : styles.offline
                    : styles.unknown
                }`}>
                {statusLoading && !status
                  ? 'Lekérdezés…'
                  : status
                    ? status.running
                      ? 'Online'
                      : 'Offline'
                    : 'Ismeretlen'}
              </span>
            </div>

            {status && (
              <div className={styles.playerCount}>
                <span>Online játékosok</span>
                <strong>
                  {status.players} / {status.max_players}
                </strong>
              </div>
            )}

            {statusError && <p className={styles.statusError}>{statusError}</p>}
          </div>
        )}

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.start}
            disabled={!apiKey.trim() || loading !== null}
            onClick={() => control('start')}>
            {loading === 'start' ? 'Indítás…' : 'Szerver indítása'}
          </button>

          <button
            type="button"
            className={styles.stop}
            disabled={!apiKey.trim() || loading !== null}
            onClick={() => control('stop')}>
            {loading === 'stop' ? 'Leállítás…' : 'Szerver leállítása'}
          </button>
        </div>

        {message && (
          <p
            className={`${styles.message} ${
              error ? styles.failure : styles.success
            }`}
            role="status">
            {message}
          </p>
        )}

        <p className={styles.note}>
          A kérés elfogadása nem jelenti, hogy a szerver már teljesen elindult
          vagy leállt. Az állapot 15 másodpercenként frissül.
        </p>
      </section>
    </main>
  );
}

# Filmverleih

## Prüfungsfragen:

1. Eine Gesamtarchitektur bei verteilten Systemen beschreibt die Struktur und Organisation eines Systems aus mehreren miteinander verbundenen Komponenten.
   Ein Web-API spielt in einer Gesamtarchitektur bei verteilten Systemen eine wichtige Rolle als Schnittstelle zur Kommunikation und Interaktion zwischen verschiedenen Komponenten und Anwendungen.
   Dementsprechen könnte das von uns entweickelte API ein wichteges Bestandteil einer Gesamtarchitektur einer Medienverleih-Plattform.
   Da über diese Schnittstelle könnten die Kunden und die Plattform miteinander kommunizieren und interagieren.
   _z. B.: Die Kunden können nach beliebigen Medien suchen und die Betreiber der Plattform können Medien hinzufügen, löschen oder deren Verfügbarkeit aktualisieren._

2.1. **Dateninkonsistenz**

- **Problem:** Wenn mehrere Benutzer versuchen gleichzeitig die gleiche Ressource zu ändern, kann es zur Inkonsistenz in den Daten führen.
- **Mögliche Lösung:** Eine mögliche Lösung in solchem Fall wäre asynchrone Kommunikation. Hier wird der Datenaustausch über einen Message-Broker durchgeführt, dieser ist der Sender und alle anderen sind die Empfänger. Die Nachrichten werden in eine Warteschlange auf dem Message-Broker abgelegt und nach dem FIFO-Prinzip bearbeitet. <br>
  2.2. **Skalierbarkeitsproblem**

- **Problem:** Wenn das API nicht für eine große Anzahl an Benutzer gedacht ist, kann es zur Überlastung des Servers und einer Verlangsamung bzw. zum Ausfall des Systems führen.
- **Mögliche Lösung:** Dieses Problem kann gelöst werden, indem das API so entworfen wir, dass es auf mehreren Servern ausgeführt wird und Lastverteilung-Technologien eingesetzt werden.

  3.1. **Dokumentation**

  - Eine umfassende Dokumentation des APIs ist wichtig, um sicherzustellen, dass Entwickler und Benutzer das System effektiv nutzen können.
    3.2. **Datenbankwahl**
  - Die richtige Wahl der Datenbanken ist wichtig, um die Leistung des Services zu optimieren. Es ist auch wichtig sicherzustellen, dass die Datenintegrität und -sicherheit gewährleistet sind.

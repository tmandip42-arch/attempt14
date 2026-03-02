import {
  Bug,
  ShieldCheck,
  FlaskConical,
  MessageSquare,
  Bell,
  QrCode,
  CloudRain,
  MapPin,
  Activity,
  Users,
  Leaf,
  Scan,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  { label: "AI Scans Today", value: "12", icon: Scan, color: "text-primary" },
  { label: "Issues Detected", value: "4", icon: Bug, color: "text-destructive" },
  { label: "Treatments Suggested", value: "3", icon: FlaskConical, color: "text-accent-foreground" },
  { label: "Expert Chats", value: "2", icon: MessageSquare, color: "text-primary" },
  { label: "Community Alerts", value: "5", icon: Bell, color: "text-destructive" },
  { label: "QR Codes Scanned", value: "28", icon: QrCode, color: "text-muted-foreground" },
]

const detections = [
  {
    field: "Field 2 - Tomatoes",
    issue: "Early Blight",
    date: "2026-03-15",
    match: "94% match",
    treatment: "Neem spray",
    status: "danger" as const,
  },
  {
    field: "Field 4 - Cucumbers",
    issue: "Aphids",
    date: "2026-03-14",
    match: "87% match",
    treatment: "Organic soap mix",
    status: "warning" as const,
  },
  {
    field: "Livestock - Buffalo #7",
    issue: "Fever",
    date: "2026-03-13",
    match: "Watch",
    treatment: "Vet consult scheduled",
    status: "warning" as const,
  },
  {
    field: "Field 1 - Potatoes",
    issue: "Healthy",
    date: "2026-03-12",
    match: "99%",
    treatment: "",
    status: "healthy" as const,
  },
]

const alerts = [
  {
    title: "Weather Warning",
    lines: ["Heavy rain Mar 18", "Fungus risk high"],
    icon: CloudRain,
  },
  {
    title: "Community Alert",
    lines: ["Aphids reported 1km away", "Check fields 2 & 4"],
    icon: Bell,
  },
  {
    title: "Treatment Reminder",
    lines: ["Apply fungicide today"],
    icon: FlaskConical,
  },
]

const fields = [
  { name: "NE Block", acres: "5 acres", status: "Healthy", color: "bg-green-500" },
  { name: "SW Block", acres: "3 acres", status: "Watch", color: "bg-yellow-500" },
  { name: "Central Block", acres: "4 acres", status: "Needs spray", color: "bg-red-500" },
]

const quickStats = [
  { label: "AI Accuracy", value: "94%", icon: Activity },
  { label: "Issues Resolved", value: "32 this month", icon: ShieldCheck },
  { label: "Experts Online", value: "3 available", icon: Users },
  { label: "Local Farms Connected", value: "8", icon: MapPin },
]

function StatusBadge({ status }: { status: "danger" | "warning" | "healthy" }) {
  const map = {
    danger: "bg-red-100 text-red-700 border-red-200",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-200",
    healthy: "bg-green-100 text-green-700 border-green-200",
  }
  return (
    <span className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${map[status]}`}>
      {status === "danger" ? "Alert" : status === "warning" ? "Watch" : "OK"}
    </span>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight text-foreground">Kudahar Krishi Farm</h1>
              <p className="text-xs text-muted-foreground">Kailash Tole, Pokhara</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-foreground">Pest & Disease Management</p>
            <p className="text-xs text-muted-foreground">March 2026</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        {/* Stats Grid */}
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <Card key={s.label} className="gap-0 py-4">
              <CardContent className="flex flex-col items-center text-center px-3 py-0">
                <s.icon className={`mb-1 h-5 w-5 ${s.color}`} />
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground leading-tight">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Recent Detections */}
          <section className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Scan className="h-4 w-4 text-primary" />
                  Recent Detections
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="divide-y divide-border">
                  {detections.map((d) => (
                    <div key={d.field} className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-foreground text-sm">{d.field}</p>
                          <StatusBadge status={d.status} />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {d.issue} &middot; {d.date}{" "}
                          <Badge variant="secondary" className="ml-1 text-xs">
                            {d.match}
                          </Badge>
                        </p>
                      </div>
                      {d.treatment && (
                        <p className="text-xs text-primary font-medium sm:text-right">
                          Treatment: {d.treatment}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Active Alerts */}
          <section>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Bell className="h-4 w-4 text-destructive" />
                  Active Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3 px-4 pb-4">
                {alerts.map((a) => (
                  <div
                    key={a.title}
                    className="rounded-lg border border-border bg-secondary/50 p-3"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <a.icon className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-semibold text-foreground">{a.title}</p>
                    </div>
                    {a.lines.map((line) => (
                      <p key={line} className="text-xs text-muted-foreground leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Field Map Status */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <MapPin className="h-4 w-4 text-primary" />
                Field Map Status
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 px-4 pb-4">
              {fields.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center justify-between rounded-lg border border-border p-3"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${f.color}`} />
                    <div>
                      <p className="text-sm font-medium text-foreground">{f.name}</p>
                      <p className="text-xs text-muted-foreground">{f.acres}</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-foreground">{f.status}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Activity className="h-4 w-4 text-primary" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3 px-4 pb-4">
              {quickStats.map((q) => (
                <div
                  key={q.label}
                  className="flex flex-col items-center rounded-lg border border-border p-4 text-center"
                >
                  <q.icon className="mb-1 h-5 w-5 text-primary" />
                  <p className="text-lg font-bold text-foreground">{q.value}</p>
                  <p className="text-xs text-muted-foreground">{q.label}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
